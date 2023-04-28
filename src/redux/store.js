import { configureStore } from '@reduxjs/toolkit'
import search from './slices/SearchSLice'

export const store = configureStore({
	reducer: {
		search,
	},
})

