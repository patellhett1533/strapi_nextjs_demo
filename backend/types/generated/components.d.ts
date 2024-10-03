import type { Schema, Attribute } from '@strapi/strapi';

export interface ReasonReasonContent extends Schema.Component {
  collectionName: 'components_reason_reason_contents';
  info: {
    displayName: 'reason_content';
    icon: 'stack';
    description: '';
  };
  attributes: {
    reason_image: Attribute.Media;
    reason_title: Attribute.String;
    reason_desc: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'reason.reason-content': ReasonReasonContent;
    }
  }
}
