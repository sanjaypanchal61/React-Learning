import ChildLayout from './ChildLayout'

const Layout = () => {
  return (
    <div>

      <ChildLayout>
        <p>main page 1</p>
      </ChildLayout>

      <ChildLayout>
        <p>main page 2</p>
      </ChildLayout>

      <ChildLayout>
        <p>main page 3</p>
      </ChildLayout>

    </div>
  )
}

export default Layout
