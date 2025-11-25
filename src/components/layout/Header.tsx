import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { 
  Globe, 
  User, 
  Menu, 
  ShieldCheck, 
  Search, 
  MessageCircle, 
  ChevronDown 
} from "lucide-react";

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export const Header = ({ onNavigate }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground hidden md:inline-block">
            PDD.Master
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {/* Learning Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium gap-1">
                Обучение <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => onNavigate('learn')}>
                Курсы
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('cards')}>
                Карточки
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('ai-scenario')}>
                AI Симулятор
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Practice Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium gap-1">
                Практика <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => onNavigate('practice')}>
                Главная
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('test')}>
                Тесты
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('test')}>
                Экзамен
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('simulation')}>
                Симуляции
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Trainers Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium gap-1">
                Тренажеры <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => onNavigate('games')}>
                Мини-игры
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('ai-scenario')}>
                Сборщик сценариев
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('analyze-photo')}>
                Анализ фото
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" className="text-sm font-medium" onClick={() => onNavigate('profile')}>
            Мой прогресс
          </Button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4 ml-auto">

          {/* AI Assistant Icon */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-primary hover:text-primary/80 hover:bg-primary/10"
            onClick={() => onNavigate('ai-explanation')}
          >
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">AI Помощник</span>
          </Button>
          
          {/* Search */}
          <div className="relative hidden md:block w-48 lg:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Поиск (знаки, билеты)..." className="pl-8 h-9" />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 hidden sm:flex">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Сменить язык</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Русский</DropdownMenuItem>
              <DropdownMenuItem>Узбек (кирил)</DropdownMenuItem>
              <DropdownMenuItem>Uzbek (lotin)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                 <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onNavigate('profile')}>Личный кабинет</DropdownMenuItem>
              <DropdownMenuItem>Настройки</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">Выход</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
