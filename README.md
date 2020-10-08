# Multi-Container Docker Application

## Purpose

> This code serves the purpose of setting up a multi-container Docker application. I realize that a bulk of the code could be better optimized. 

## How It Works?

> In general, this code sets up Docker containers for a React UI, Express server, Node worker, Redis for worker tracking, and a Postgres Database. The Travis CI config runs a test (should always pass) and commits the containers to my Docker account. The commented out build section of the config deployed everything to AWS Elastic Beanstalk to represent a "production" version.