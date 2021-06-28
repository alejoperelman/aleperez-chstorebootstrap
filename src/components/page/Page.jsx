import { NavBarAp } from '../../components/navBarAp/NavBarAp'

const fullname =  "Ale Perez"
export const Page = ({ children }) => (

    <main>
        <NavBarAp user={fullname} />
        { children }
    </main>    
)