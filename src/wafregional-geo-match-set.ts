// https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafregionalGeoMatchSetConfig extends TerraformMetaArguments {
  readonly name: string;
  /** geo_match_constraint block */
  readonly geoMatchConstraint?: WafregionalGeoMatchSetGeoMatchConstraint[];
}
export interface WafregionalGeoMatchSetGeoMatchConstraint {
  readonly type: string;
  readonly value: string;
}

// Resource

export class WafregionalGeoMatchSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalGeoMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_geo_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._geoMatchConstraint = config.geoMatchConstraint;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // geo_match_constraint - computed: false, optional: true, required: false
  private _geoMatchConstraint?: WafregionalGeoMatchSetGeoMatchConstraint[];
  public get geoMatchConstraint() {
    return this._geoMatchConstraint;
  }
  public set geoMatchConstraint(value: WafregionalGeoMatchSetGeoMatchConstraint[] | undefined) {
    this._geoMatchConstraint = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      geo_match_constraint: this._geoMatchConstraint,
    };
  }
}
