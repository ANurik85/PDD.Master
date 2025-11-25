import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Progress } from "../ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Calendar } from "../ui/calendar";
import { Badge } from "../ui/badge";
import { TrendingUp, Clock, BookOpen, Trophy, Target } from "lucide-react";

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

export const ProfilePage = ({ onNavigate }: ProfilePageProps) => {
  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6">
      
      {/* Header Profile Info */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
         <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
         </Avatar>
         <div className="space-y-1 flex-1">
            <h1 className="text-2xl font-bold">Алексей Иванов</h1>
            <p className="text-muted-foreground">Ученик • Стаж обучения: 2 недели</p>
            <div className="flex gap-2 mt-2">
               <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Уровень 5</Badge>
               <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Pro Аккаунт</Badge>
            </div>
         </div>
         <div className="flex gap-2">
            <Button variant="outline">Настройки</Button>
            <Button>Продолжить обучение</Button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* Main Stats (Left 2/3) */}
         <div className="lg:col-span-2 space-y-6">
            
            {/* Prediction Widget */}
            <Card className="bg-slate-900 text-white border-none">
               <CardContent className="p-6 flex items-center justify-between">
                  <div>
                     <div className="text-sm text-slate-400 mb-1">Вероятность сдачи экзамена</div>
                     <div className="text-4xl font-bold text-green-400 flex items-end gap-2">
                        85% 
                        <TrendingUp className="h-6 w-6 mb-1" />
                     </div>
                     <p className="text-xs text-slate-400 mt-2">Вы готовы к экзамену! Еще немного практики по "Медицине".</p>
                  </div>
                  
                   {/* Simple Chart Placeholder */}
                   <div className="hidden sm:flex items-end gap-1 h-16">
                      {[40, 55, 45, 60, 75, 80, 85].map((h, i) => (
                          <div key={i} style={{ height: `${h}%` }} className="w-4 bg-slate-700 rounded-t hover:bg-green-500 transition-colors" />
                      ))}
                   </div>
               </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               <Card>
                  <CardContent className="p-4 flex flex-col items-center text-center pt-6">
                     <Clock className="h-8 w-8 text-blue-500 mb-2" />
                     <div className="text-2xl font-bold">12ч 30м</div>
                     <div className="text-xs text-muted-foreground">Время обучения</div>
                  </CardContent>
               </Card>
               <Card>
                  <CardContent className="p-4 flex flex-col items-center text-center pt-6">
                     <BookOpen className="h-8 w-8 text-purple-500 mb-2" />
                     <div className="text-2xl font-bold">24/40</div>
                     <div className="text-xs text-muted-foreground">Темы пройдены</div>
                  </CardContent>
               </Card>
               <Card>
                  <CardContent className="p-4 flex flex-col items-center text-center pt-6">
                     <Target className="h-8 w-8 text-red-500 mb-2" />
                     <div className="text-2xl font-bold">92%</div>
                     <div className="text-xs text-muted-foreground">Точность ответов</div>
                  </CardContent>
               </Card>
            </div>

            {/* Knowledge Map */}
            <Card>
               <CardHeader>
                  <CardTitle>Карта знаний</CardTitle>
                  <CardDescription>Ваш прогресс по разделам ПДД</CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="space-y-4">
                     {[
                        { name: "Общие положения", val: 100, color: "bg-green-500" },
                        { name: "Дорожные знаки", val: 80, color: "bg-green-500" },
                        { name: "Проезд перекрестков", val: 45, color: "bg-yellow-500" },
                        { name: "Медицина", val: 20, color: "bg-red-500" }
                     ].map((item, i) => (
                        <div key={i} className="space-y-1">
                           <div className="flex justify-between text-sm">
                              <span className="font-medium">{item.name}</span>
                              <span className="text-muted-foreground">{item.val}%</span>
                           </div>
                           <Progress value={item.val} className="h-2" indicatorClassName={item.color} />
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

         </div>

         {/* Sidebar (Right 1/3) */}
         <div className="space-y-6">
            
            {/* Achievements */}
            <Card>
               <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                     <Trophy className="h-5 w-5 text-yellow-500" /> Достижения
                  </CardTitle>
               </CardHeader>
               <CardContent className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                     <div key={i} className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-help group relative">
                        <Trophy className={`h-6 w-6 ${i <= 3 ? "text-yellow-500" : "text-slate-300"}`} />
                        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs p-2 rounded whitespace-nowrap z-10">
                           {i <= 3 ? "Получено!" : "Закрыто"}
                        </div>
                     </div>
                  ))}
               </CardContent>
            </Card>

            {/* Calendar */}
            <Card>
               <CardContent className="p-4 flex justify-center">
                  <Calendar 
                     mode="single"
                     selected={new Date()}
                     className="rounded-md border"
                  />
               </CardContent>
            </Card>

         </div>
      </div>
    </div>
  );
};
