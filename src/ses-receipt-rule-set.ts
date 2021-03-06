// https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SesReceiptRuleSetConfig extends TerraformMetaArguments {
  readonly ruleSetName: string;
}

// Resource

export class SesReceiptRuleSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SesReceiptRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_receipt_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ruleSetName = config.ruleSetName;
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

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName: string;
  public get ruleSetName() {
    return this._ruleSetName;
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      rule_set_name: this._ruleSetName,
    };
  }
}
