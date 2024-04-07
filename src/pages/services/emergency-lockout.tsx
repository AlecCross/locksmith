import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'
import metaTagsData from '@/data/metaTags';

export default function EmergencyLockout() {
    const serviceData = servicesPage.find(service => service.title === "Emergency Lockout");
    const metaTags = metaTagsData.find(meta => meta.page === "emergency-lockout");
    return (
        <ServiceTemplate
            key={serviceData?.title}
            title={serviceData?.title}
            description={serviceData?.description}
            image={serviceData?.image}
            lastImage={serviceData?.lastImage}
            sliderImages={serviceData?.sliderImages}
            metaTags={metaTags}
            article1={serviceData?.article1}
            article2={serviceData?.article2}
            article3={serviceData?.article3}
            article4={serviceData?.article4}
            article5={serviceData?.article5}
            title2={serviceData?.title2}
            title3={serviceData?.title3}
        />
    );
}
