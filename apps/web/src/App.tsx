import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { AboutPage, AdminPage, CampaignDetailPage, CampaignsPage, DonorDashboard, Home, NotFound, TransparencyPage } from './pages'
export default function App(){return <BrowserRouter><Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="campaigns" element={<CampaignsPage/>}/><Route path="campaigns/:id" element={<CampaignDetailPage/>}/><Route path="dashboard" element={<DonorDashboard/>}/><Route path="transparency" element={<TransparencyPage/>}/><Route path="admin" element={<AdminPage/>}/><Route path="about" element={<AboutPage/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></BrowserRouter>}
