# Ldap synchronization example

## Introduction

The goal of this example is to familiarize you with the way Wren:idm reconciles identities with
LDAP system.

It comes with pre-made sample data and all the configuration you need to get you going with minimal effort.

## Setup

Make sure you have docker and docker-compose installed on your system.

## Running the example

Make sure you are in directory with the `docker-compose.yaml` file
and run:

`docker-compose up`

This starts both Wren:idm and OpenLDAP in their docker containers

## I/O

### Wren:IDM

- accessible via HTTP at `localhost:8080`
- database is mapped to `./idm-database`

### OpenLDAP

Root dn: cn=admin,dc=wrensecurity,dc=org
Root password: admin

- accessible via HTTP at `localhost:389` (no TLS)
- accessible via HTTP at `localhost:636` (with TLS)
- ./slapd.d
- ./ldap

## Trying the usecase

This usecase demonstrates synchronization of identities from Wren:idm to LDAP.

Admin dashboard -> Manage -> User

Check existing user accounts, optionally edit them or add more.

Configure -> Mappings

click Reconcile

All the users are now in LDAP.

