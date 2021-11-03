# Ldap synchronization example

This usecase demonstrates synchronization of identities from Wren:IDM to LDAP.
## Running the example

cd into directory with `docker-compose.yaml` file
and run:

`docker-compose up`

This starts both Wren:idm and OpenLDAP in their docker containers.
Ports needed for communication will be forwarded to host as described below.
### Wren:IDM

- accessible via HTTP at `localhost:8080`

### OpenLDAP

Root dn: cn=admin,dc=wrensecurity,dc=org
Root password: admin

- accessible via HTTP at `localhost:389` (no TLS)
- accessible via HTTP at `localhost:636` (with TLS)

### Configuration files

To sync with LDAP, Wren:IDM needs LDAP connector configuration file and mapping file.

Those are provided in sample_data/conf folder:

- provisioner.openicf-ldap.json - (LDAP connector configuration file)
- sync.json - (mapping file)

Those files are mounted into the Wren:IDM container as bind mounts.
If you change them, Wren:IDM will notice and handle the change without restart.

## Managing users using GUI

1. Go to admin user interface: `localhost:8080/admin`

2. Navigate to user management: Manage -> User

3. Create some users: click "New User" button and fill in required user data


## Managing users using CLI

1. Create a user using this command:

----
    curl \
      -u openidm-admin:openidm-admin \
      -XPUT \
      -H "Content-Type: application/json" \
      -d '{"_id":"someuser", "userName":"someuser", "givenName":"Sam", "sn":"User", "mail":"sam@user.com"}' \
      "http://localhost:8080/openidm/managed/user/someuser"
----

## LDAP Checking

Ldap connector runs in live-sync mode.
This means that changes are propagated as soon as they happen without the need to trigger manual reconciliation.

- To verify that users are present in LDAP, you can use this command:

    ----
        ldapsearch -H ldap://localhost:389 -x -D "cn=admin,dc=wrensecurity,dc=org" -w admin -b "dc=wrensecurity,dc=org" "(objectClass=*)"
    ----
