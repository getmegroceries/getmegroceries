import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsp from 'aws-cdk-lib/aws-ecs-patterns';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const repository = cdk.aws_ecr.Repository.fromRepositoryName(this, "690517313378", "gmg");

    new ecsp.ApplicationLoadBalancedFargateService(this, 'gmg', {
      taskImageOptions: {
        image: ecs.ContainerImage.fromEcrRepository(repository, process.env.IMAGE_TAG || "latest"),
      },
      publicLoadBalancer: true
    });
  }
}