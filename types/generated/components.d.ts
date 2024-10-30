import type { Struct, Schema } from '@strapi/strapi';

export interface TechStackTechStack extends Struct.ComponentSchema {
  collectionName: 'components_tech_stack_tech_stacks';
  info: {
    displayName: 'techStack';
    icon: 'code';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    category: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'tech-stack.tech-stack': TechStackTechStack;
    }
  }
}
