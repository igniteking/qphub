import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning={true}
      data-theme-mode="dark"
      data-header-styles="dark"
      data-menu-styles="dark"
      dir="ltr"
      data-nav-layout="vertical"
      data-nav-style="default"
      data-page-style="default"
      data-width="default"
      data-menu-position="fixed"
      data-header-position="fixed"
      data-vertical-style="icontext"
      data-toggled="close"
      // data-icon-overlay={local_varaiable.iconOverlay}
      // data-bg-img={local_varaiable.bgImg}
      // data-icon-text={local_varaiable.iconText}

      lang="en"
    >
      <meta
        name="keywords"
        content="nextjs template, nextjs dashboard, nextjs admin template, admin template, admin, reactbootstrap, typescript, firebase nextjs, react bootstrap, dashboard, app router, nextjs, nextjs template, admin dashboard template, router admin"
      />
      <body>{children}</body>
    </html>
  );
}
