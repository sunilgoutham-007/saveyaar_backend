import { ComponentLoader } from 'adminjs';
const componentLoader = new ComponentLoader();
const Components = {
    MySubscriptionForm: componentLoader.add('MySubscriptionForm', './SubscriptionPlatformForm'),
};
export { componentLoader, Components };
