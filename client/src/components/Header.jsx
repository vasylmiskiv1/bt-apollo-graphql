import GraphQLLogo from '../assets/graphql.svg';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a className="navbar-brand" href="/">
          <div className='d-flex'>
          <img src={GraphQLLogo} alt="graphql" style={{height: '23px', marginTop: '5px'}} />
            GraphQL Project management
          </div>
        </a>
      </div>
    </nav>
  )
}
