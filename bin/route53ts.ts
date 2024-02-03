#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Route53TsStack } from '../lib/route53ts-stack';

const app = new cdk.App();
new Route53TsStack(app, 'Route53TsStack', {
});