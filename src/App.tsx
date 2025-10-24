import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline, Box, Typography } from '@mui/material'
import { ThemeProvider } from './contexts/ThemeContext'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage/HomePage'

const CatchPage = () => (
	<Box>
		<Typography variant='h4' gutterBottom>
			Ввод улова
		</Typography>
		<Typography variant='body1'>
			Форма для ввода улова будет здесь...
		</Typography>
	</Box>
)

const MyCatchesPage = () => (
	<Box>
		<Typography variant='h4' gutterBottom>
			Мои уловы
		</Typography>
		<Typography variant='body1'>
			Таблица с историей уловов будет здесь...
		</Typography>
	</Box>
)

const OverviewPage = () => (
	<Box>
		<Typography variant='h4' gutterBottom>
			Обзор уловов
		</Typography>
		<Typography variant='body1'>
			Общая статистика по всем уловам будет здесь...
		</Typography>
	</Box>
)

const QuotasPage = () => (
	<Box>
		<Typography variant='h4' gutterBottom>
			Управление квотами
		</Typography>
		<Typography variant='body1'>Настройка квот будет здесь...</Typography>
	</Box>
)

function App() {
	return (
		<ThemeProvider>
			<CssBaseline />
			<Router>
				<MainLayout>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/catch' element={<CatchPage />} />
						<Route path='/my-catches' element={<MyCatchesPage />} />
						<Route path='/overview' element={<OverviewPage />} />
						<Route path='/quotas' element={<QuotasPage />} />
					</Routes>
				</MainLayout>
			</Router>
		</ThemeProvider>
	)
}

export default App
