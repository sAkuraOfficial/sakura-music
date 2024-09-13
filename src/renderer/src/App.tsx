import React from 'react'
import { Layout, theme } from 'antd'
import AppHeader from './components/AppHeader/AppHeader'
import AppSider from './components/AppSider/AppSider'
import AppContent from './components/AppContent/AppContent'
import AppFooter from './components/AppFooter/AppFooter'

const { Header, Content, Sider, Footer } = Layout

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  const layoutStyle = {
    minHeight: '100vh', // Ensure the layout takes up the full viewport height
    display: 'flex',
    flexDirection: 'column' as const
  }

  // 头部
  const headerStyle = {
    top: 0,
    zIndex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'sticky' as const,
    height: 64
  }

  // 底部
  const footerStyle = {
    padding: 0,
    margin: 0,
    width: '100%',
    height: 64,
    //控件两端对其
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  // 侧边栏
  const siderStyle = {
    background: colorBgContainer,
    overflow: 'auto',
    height: `${window.innerHeight - headerStyle.height - footerStyle.height - 2}px`,
    scrollbarWidth: 'thin' as const
  }

  // 内容
  const contentStyle = {
    flex: 1,
    margin: 0,
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
    height: siderStyle.height
  }

  return (
    <Layout style={layoutStyle}>
      {/*头部*/}
      <Header style={headerStyle}>
        <AppHeader />
      </Header>

      {/*中间部分*/}
      <Layout>
        {/*中左：侧边*/}
        <Sider width={180} style={siderStyle}>
          <AppSider />
        </Sider>
        {/*中右：内容*/}
        <Content style={contentStyle}>
          <AppContent />
        </Content>
      </Layout>

      {/*底部：音乐控制*/}
      <Footer style={footerStyle}>
        <AppFooter />
      </Footer>
    </Layout>
  )
}

export default App
