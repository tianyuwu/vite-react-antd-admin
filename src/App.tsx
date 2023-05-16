import { ConfigProvider } from "antd";
import { RouterProvider } from 'react-router-dom';

import zhCN from "antd/es/locale/zh_CN";
import { router } from "./router";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App;
