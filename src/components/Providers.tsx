"use client"
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes"
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
// import { type ThemeProviderProps } from "next-themes/dist/types"

const Providers = ({children}: {children: React.ReactNode}) => {

  const queryClient = new QueryClient();

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </NextThemesProvider>
  );
};

export default Providers;
