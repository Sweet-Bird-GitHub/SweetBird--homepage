package test;

import org.apache.catalina.core.ApplicationContext;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import web_run.hellospring.config.configuration;

public class ApplicationContext_TEST {

    AnnotationConfigApplicationContext ac=new AnnotationConfigApplicationContext(configuration.class);
@Test
    void runP()
    {
        String[] beanDefinitionNames = ac.getBeanDefinitionNames();

        for (String beanDefinitionName : beanDefinitionNames) {
            System.out.println(beanDefinitionName);

        }

    }
}
