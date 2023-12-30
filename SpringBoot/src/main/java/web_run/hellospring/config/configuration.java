package web_run.hellospring.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import web_run.hellospring.MemberService.MemberLoginServiceAdmin;
import web_run.hellospring.controll.cont;
import web_run.hellospring.google_API.join;

@Configuration
public class configuration {

    /*@Bean
    public cont ct()
    {
        return new cont(MS());
    }*/

    @Bean
    public MemberLoginServiceAdmin MS()
    {
        return new MemberLoginServiceAdmin(Join());
    }
    @Bean
    public join Join()
    {
        return new join();
    }


}
