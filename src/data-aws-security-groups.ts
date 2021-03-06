// https://www.terraform.io/docs/providers/aws/r/data_aws_security_groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsSecurityGroupsConfig extends TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsSecurityGroupsFilter[];
}
export interface DataAwsSecurityGroupsFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsSecurityGroups extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSecurityGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_security_groups',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ids - computed: true, optional: false, required: true
  public get ids() {
    return this.getListAttribute('ids');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_ids - computed: true, optional: false, required: true
  public get vpcIds() {
    return this.getListAttribute('vpc_ids');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsSecurityGroupsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsSecurityGroupsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: this._tags,
      filter: this._filter,
    };
  }
}
