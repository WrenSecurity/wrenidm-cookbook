# Wren:IDM Cookbook

Cookbook consists of recipes (samples) demonstrating key Wren:IDM features.
Environment for each sample is defined through Docker Compose file.
Execute single command to start relevant Docker containers, zero configuration needed.

The following samples are available:

  * sync – synchronize data between Wren:IDM and source / target systems
  * workflow – create workflow with approval in Wren:IDM
  * roles – manage roles and assignment values
  * endpoint – create custom REST API endpoint to execute custom business logic
  * scheduler – schedule synchronization or script to be automatically triggered
  * email – send email notification
  * audit (TBD) – explore audit logs
  * deploy (TBD) – Wren:IDM container deployment

More information can be found in README files in sample subfolders.


## Prerequisites

All samples need Docker and Docker Compose to be executed.

Please follow official [manual](https://docs.docker.com/engine/install) to install Docker.

Please follow official [manual](https://docs.docker.com/compose/install) to install Docker Compose.
