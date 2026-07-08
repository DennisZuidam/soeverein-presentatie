#!/usr/bin/env bash
#
# Opname-draaiboek: presentatie live van Azure naar Scaleway (nl-ams) migreren,
# volledig vanuit de terminal, met Kamal. Bedoeld om per blok te plakken tijdens
# de screencast, niet om in één keer te draaien.
#
# Vooraf (buiten beeld):
#   - CLI's: az, scw, kamal (gem install kamal), docker, ssh, jq
#   - Ingelogd: `az login`, `scw init`, en je SSH-key in je Scaleway-project
#   - GHCR-token (write:packages) klaar in je env:
#       export KAMAL_REGISTRY_PASSWORD=ghp_xxx
#   - Eén oefenrun gedaan, zodat de Docker-image gecached is (scheelt wachttijd).
#
# De URL leidt af uit het IP via sslip.io, dus geen DNS. De url verspringt per
# cloud (<ip>.sslip.io); dát is meteen het bewijs dat je op een andere bak zit.

set -euo pipefail

SSH_KEY=~/.ssh/id_ed25519            # jouw keypair (public key gaat naar beide VM's)
RG=rg-euwest1                        # Azure resource group
sslip() { echo "$1" | tr '.' '-'; }  # 51.15.1.2 -> 51-15-1-2

# ─────────────────────────────────────────────────────────────────────────────
# A · Azure-infra live optuigen
# ─────────────────────────────────────────────────────────────────────────────
az group create -n "$RG" -l westeurope

az vm create -g "$RG" -n vm-azure \
  --image Ubuntu2404 --size Standard_B1s \
  --admin-username azureuser \
  --ssh-key-values "${SSH_KEY}.pub" \
  --public-ip-sku Standard

az vm open-port -g "$RG" -n vm-azure --port 443 --priority 900

export DEPLOY_IP="$(az vm show -g "$RG" -n vm-azure -d --query publicIps -o tsv)"
export DEPLOY_HOST="$(sslip "$DEPLOY_IP").sslip.io"
ssh-keyscan -H "$DEPLOY_IP" >> ~/.ssh/known_hosts 2>/dev/null   # host-key vertrouwen
echo "Azure staat klaar op https://$DEPLOY_HOST"

# ─────────────────────────────────────────────────────────────────────────────
# B · Deployen naar Azure  (build + push image, SSH, container up, TLS-cert)
# ─────────────────────────────────────────────────────────────────────────────
kamal setup -d azure          # eerste keer: bootstrapt Docker + proxy én deployt
# later opnieuw: kamal deploy -d azure

# ─────────────────────────────────────────────────────────────────────────────
# C · Bewijs: draait echt op Azure
# ─────────────────────────────────────────────────────────────────────────────
curl -sI "https://$DEPLOY_HOST/" | head -1        # HTTP/2 200
echo "Open in de browser: https://$DEPLOY_HOST"

# ─────────────────────────────────────────────────────────────────────────────
# D · Scaleway-infra + migratie (zelfde image, andere bak)
# ─────────────────────────────────────────────────────────────────────────────
scw instance server create \
  type=DEV1-S image=ubuntu_jammy zone=nl-ams-1 name=vm-scaleway ip=new --wait

SCW_IP="$(scw instance server list zone=nl-ams-1 name=vm-scaleway -o json \
  | jq -r '.[0].public_ip.address // .[0].public_ips[0].address')"
export DEPLOY_IP="$SCW_IP"
export DEPLOY_HOST="$(sslip "$SCW_IP").sslip.io"
ssh-keyscan -H "$DEPLOY_IP" >> ~/.ssh/known_hosts 2>/dev/null
echo "Scaleway staat klaar op https://$DEPLOY_HOST"

kamal setup -d scaleway       # dezelfde presentatie, nu in nl-ams

curl -sI "https://$DEPLOY_HOST/" | head -1        # HTTP/2 200, andere url = andere cloud

# ─────────────────────────────────────────────────────────────────────────────
# E · Slotbeeld: nog een provider is één vlag
# ─────────────────────────────────────────────────────────────────────────────
echo "Van Azure naar Scaleway was: dezelfde image, -d azure  ->  -d scaleway."
echo "Naar Hetzner? kamal deploy -d hetzner. Keuzevrijheid is een one-liner."

# ─────────────────────────────────────────────────────────────────────────────
# Opruimen (na de opname, buiten beeld)
# ─────────────────────────────────────────────────────────────────────────────
#   az group delete -n "$RG" --yes --no-wait
#   scw instance server terminate zone=nl-ams-1 <server-id> with-ip=true with-volumes=all
