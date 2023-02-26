import { useAuth } from "../hooks/use-auth"
import Account from '../components/account/Account'

const AccountPage = () => {

    const {email, name} = useAuth();

    console.log(name)

    return (
      <>
        <Account/>
      </>
    )
  }

  export default AccountPage