import Layout from '@/components/Layout'
import { createBrowserRouter, Navigate } from 'react-router-dom'

export const menuList = [
  {
    path: '/',
    element: <Layout />,
    children: [
      // {
      //     path: '/',
      //     element: < App/>,
      // },
      // {
      //   path: '/zksync',
      //   element: <Zksync />,
      // },
      // {
      //   path: '/stark',
      //   element: <Stark />,
      // },
      // {
      //   path: '/Layer',
      //   element: <Layer />,
      // },
      // {
      //   path: '/mirror',
      //   element: <Mirror />,
      // },
      // {
      //   path: '/coffee',
      //   element: <Coffee />,
      // },
      // {
      //   path: '/deposit',
      //   element: <Deposit />,
      // },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '管理页',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page1',
        name: '一级页面',
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
        component: './Welcome',
      },
      {
        path: '/admin/sub-page2',
        name: '二级页面',
        component: './Welcome',
      },
      {
        path: '/admin/sub-page3',
        name: '三级页面',
        component: './Welcome',
      },
    ],
  },
  {
    name: '列表页',
    path: '/list',
    component: './ListTableList',
    routes: [
      {
        path: '/list/sub-page',
        name: '列表页面',
        routes: [
          {
            path: 'sub-sub-page1',
            name: '一一级列表页面',
            component: './Welcome',
          },
          {
            path: 'sub-sub-page2',
            name: '一二级列表页面',
            component: './Welcome',
          },
          {
            path: 'sub-sub-page3',
            name: '一三级列表页面',
            component: './Welcome',
          },
        ],
      },
      {
        path: '/list/sub-page2',
        name: '二级列表页面',
        component: './Welcome',
      },
      {
        path: '/list/sub-page3',
        name: '三级列表页面',
        component: './Welcome',
      },
    ],
  },
  {
    path: 'https://ant.design',
    name: 'Ant Design 官网外链',
  },
  { path: '*', element: <Navigate to="/" /> },
]

const router = createBrowserRouter(menuList)

export default router
