// https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DxPrivateVirtualInterfaceConfig extends TerraformMetaArguments {
  readonly addressFamily: string;
  readonly amazonAddress?: string;
  readonly bgpAsn: number;
  readonly bgpAuthKey?: string;
  readonly connectionId: string;
  readonly customerAddress?: string;
  readonly dxGatewayId?: string;
  readonly mtu?: number;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly vlan: number;
  readonly vpnGatewayId?: string;
  /** timeouts block */
  readonly timeouts?: DxPrivateVirtualInterfaceTimeouts;
}
export interface DxPrivateVirtualInterfaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DxPrivateVirtualInterface extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxPrivateVirtualInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_private_virtual_interface',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressFamily = config.addressFamily;
    this._amazonAddress = config.amazonAddress;
    this._bgpAsn = config.bgpAsn;
    this._bgpAuthKey = config.bgpAuthKey;
    this._connectionId = config.connectionId;
    this._customerAddress = config.customerAddress;
    this._dxGatewayId = config.dxGatewayId;
    this._mtu = config.mtu;
    this._name = config.name;
    this._tags = config.tags;
    this._vlan = config.vlan;
    this._vpnGatewayId = config.vpnGatewayId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily: string;
  public get addressFamily() {
    return this._addressFamily;
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }

  // amazon_address - computed: true, optional: true, required: false
  private _amazonAddress?: string;
  public get amazonAddress() {
    return this._amazonAddress ?? this.getStringAttribute('amazon_address');
  }
  public set amazonAddress(value: string | undefined) {
    this._amazonAddress = value;
  }

  // amazon_side_asn - computed: true, optional: false, required: true
  public get amazonSideAsn() {
    return this.getStringAttribute('amazon_side_asn');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_device - computed: true, optional: false, required: true
  public get awsDevice() {
    return this.getStringAttribute('aws_device');
  }

  // bgp_asn - computed: false, optional: false, required: true
  private _bgpAsn: number;
  public get bgpAsn() {
    return this._bgpAsn;
  }
  public set bgpAsn(value: number) {
    this._bgpAsn = value;
  }

  // bgp_auth_key - computed: true, optional: true, required: false
  private _bgpAuthKey?: string;
  public get bgpAuthKey() {
    return this._bgpAuthKey ?? this.getStringAttribute('bgp_auth_key');
  }
  public set bgpAuthKey(value: string | undefined) {
    this._bgpAuthKey = value;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId: string;
  public get connectionId() {
    return this._connectionId;
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }

  // customer_address - computed: true, optional: true, required: false
  private _customerAddress?: string;
  public get customerAddress() {
    return this._customerAddress ?? this.getStringAttribute('customer_address');
  }
  public set customerAddress(value: string | undefined) {
    this._customerAddress = value;
  }

  // dx_gateway_id - computed: false, optional: true, required: false
  private _dxGatewayId?: string;
  public get dxGatewayId() {
    return this._dxGatewayId;
  }
  public set dxGatewayId(value: string | undefined) {
    this._dxGatewayId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // jumbo_frame_capable - computed: true, optional: false, required: true
  public get jumboFrameCapable() {
    return this.getBooleanAttribute('jumbo_frame_capable');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number;
  public get mtu() {
    return this._mtu;
  }
  public set mtu(value: number | undefined) {
    this._mtu = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan: number;
  public get vlan() {
    return this._vlan;
  }
  public set vlan(value: number) {
    this._vlan = value;
  }

  // vpn_gateway_id - computed: false, optional: true, required: false
  private _vpnGatewayId?: string;
  public get vpnGatewayId() {
    return this._vpnGatewayId;
  }
  public set vpnGatewayId(value: string | undefined) {
    this._vpnGatewayId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DxPrivateVirtualInterfaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DxPrivateVirtualInterfaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: this._addressFamily,
      amazon_address: this._amazonAddress,
      bgp_asn: this._bgpAsn,
      bgp_auth_key: this._bgpAuthKey,
      connection_id: this._connectionId,
      customer_address: this._customerAddress,
      dx_gateway_id: this._dxGatewayId,
      mtu: this._mtu,
      name: this._name,
      tags: this._tags,
      vlan: this._vlan,
      vpn_gateway_id: this._vpnGatewayId,
      timeouts: this._timeouts,
    };
  }
}
