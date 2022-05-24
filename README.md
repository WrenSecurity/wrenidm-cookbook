# Wren:IDM Cookbook

Cookbook consist of few samples (recipes) demonstrating some of the Wren:IDM features.
Environment for each sample is defined through Docker Compose file.
So you don't have to do any kind of configuration, just execute single command to start relevant Docker containers.

Samples are addressing these use-cases:

  * sync – synchronize data between Wren:IDM and source / target systems
  * workflow – create workflow with approval in Wren:IDM
  * roles (TBD) – manage roles and assignment values
  * endpoint (TBD) – create custom REST API endpoint to execute custom business logic
  * scheduler (TBD) – schedule script to be automatically triggered
  * email (TBD) – send email notification
  * audit (TBD) – explore audit logs

More information can be found in README files in sample subfolders.


## Prerequisites

All samples need Docker and Docker Compose to be executed.

Please follow official [manual](https://docs.docker.com/engine/install) to install Docker.

Please follow official [manual](https://docs.docker.com/compose/install) to install Docker Compose.
