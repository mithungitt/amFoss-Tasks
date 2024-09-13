## Directory Structure of Weather App

```
.
├── Ansible
|   ├── Vagrantfile
│   ├── ansible.cfg
│   ├── applicationSetup-Vagrant.yml
│   ├── applicationSetup.yml
│   ├── hosts
│   └── nagios.yaml
│   
├── flask
│   ├── templates
│   │   ├── index.html
│   │   └── appcall.json
│   ├── .flaskenv
│   ├── application.py
│   ├── db_setup.py
│   ├── flask-app.conf
│   ├── flaskapp.service
│   ├── production.wsgi
│   └── requirements.txt
│   └── weather.db
├── terraform-vpc
│   ├── main.tf
│   ├── run.sh
│   ├── setup_ec2.sh
│   ├── terraform.tfstate
│   └── variable.tf
├── .gitignore
├── Project Presentation.key
├── Project Presentation.pptx
├── README.md

```