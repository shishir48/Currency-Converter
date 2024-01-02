import Header from "./header/header.layout"

const defaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default defaultLayout
