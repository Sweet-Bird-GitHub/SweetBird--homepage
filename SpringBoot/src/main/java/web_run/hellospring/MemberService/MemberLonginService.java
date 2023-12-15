package web_run.hellospring.MemberService;

import java.io.IOException;
import java.security.GeneralSecurityException;

public interface MemberLonginService {

   public boolean AdminLogin(String ID, String PSSWERD) throws GeneralSecurityException, IOException;

}
