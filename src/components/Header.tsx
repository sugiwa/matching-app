import AccountStatus from './Auth/AccountStatus';

const Header = () => {
  return (
    <header className="x-full px-5 py-2 bg-red-300 flex justify-between items-center">
      <p>header</p>
      <AccountStatus />
    </header>
  );
};
export default Header;
