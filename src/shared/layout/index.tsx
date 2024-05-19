export function Layout({ children }: GCommonComponentPropertiesWithChildren) {
  return (
    <main className='select-none'>
      {children}
    </main>
  )
}
