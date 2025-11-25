import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MessageSquare, Send, Bot, User, Plus, GripVertical, Sparkles, CornerDownLeft } from "lucide-react";
import { motion } from "motion/react";

interface AIExplanationPageProps {
  onNavigate: (page: string) => void;
}

export const AIExplanationPage = ({ onNavigate }: AIExplanationPageProps) => {
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-7xl h-[calc(100vh-80px)] flex flex-col">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              AI Инструктор 
              <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide">Beta</span>
           </h1>
           <p className="text-muted-foreground mt-1">Персональный помощник для разбора правил и моделирования ситуаций.</p>
        </div>
      </div>

      <Tabs defaultValue="chat" className="flex-1 flex flex-col h-full min-h-0">
        <TabsList className="grid w-full max-w-sm grid-cols-2 mb-6 bg-slate-100 p-1 rounded-lg">
          <TabsTrigger value="chat" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Диалог</TabsTrigger>
          <TabsTrigger value="scenario" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Сборщик ситуаций</TabsTrigger>
        </TabsList>

        {/* CHAT MODE */}
        <TabsContent value="chat" className="flex-1 flex flex-col data-[state=active]:flex overflow-hidden border rounded-2xl bg-white shadow-sm">
           <ScrollArea className="flex-1 p-6 bg-slate-50/30">
              <div className="space-y-8 max-w-3xl mx-auto">
                  {/* AI Message */}
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4">
                      <div className="mt-1">
                          <Avatar className="h-10 w-10 border-2 border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
                              <AvatarFallback><Bot className="h-6 w-6" /></AvatarFallback>
                          </Avatar>
                      </div>
                      <div className="space-y-1 flex-1">
                          <div className="text-xs text-slate-400 font-medium ml-1">AI Инструктор</div>
                          <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-sm leading-relaxed text-slate-700">
                              <p>Здравствуйте! Я готов помочь вам разобраться в ПДД. 🚗</p>
                              <p className="mt-2">Мы можем разобрать конкретный пункт правил, или я могу смоделировать для вас сложную ситуацию на дороге.</p>
                          </div>
                      </div>
                  </motion.div>

                  {/* User Message */}
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex gap-4 flex-row-reverse">
                      <div className="mt-1">
                         <Avatar className="h-10 w-10 border-2 border-slate-200 shadow-sm">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback><User className="h-6 w-6" /></AvatarFallback>
                         </Avatar>
                      </div>
                      <div className="space-y-1 flex-1 text-right">
                          <div className="text-xs text-slate-400 font-medium mr-1">Вы</div>
                          <div className="bg-primary text-primary-foreground p-5 rounded-2xl rounded-tr-none shadow-lg text-sm leading-relaxed inline-block text-left max-w-[85%]">
                              <p>Чем обгон отличается от опережения? Всегда путаю эти понятия.</p>
                          </div>
                      </div>
                  </motion.div>

                   {/* AI Message */}
                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-4">
                      <div className="mt-1">
                          <Avatar className="h-10 w-10 border-2 border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
                              <AvatarFallback><Bot className="h-6 w-6" /></AvatarFallback>
                          </Avatar>
                      </div>
                      <div className="space-y-1 flex-1">
                          <div className="text-xs text-slate-400 font-medium ml-1">AI Инструктор</div>
                          <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-sm leading-relaxed text-slate-700">
                              <p>Это классический вопрос! Давайте разберем ключевое отличие:</p>
                              <ul className="list-none mt-3 space-y-3">
                                  <li className="flex gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                                      <span className="font-bold text-blue-600">Обгон</span>
                                      <span>Всегда связан с выездом на полосу <u>встречного</u> движения и последующим возвращением на свою полосу.</span>
                                  </li>
                                  <li className="flex gap-3 bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                                      <span className="font-bold text-slate-600">Опережение</span>
                                      <span>Движение со скоростью, большей скорости попутного транспорта. Происходит в пределах своей или попутной полосы, без выезда на "встречку".</span>
                                  </li>
                              </ul>
                              <p className="mt-3 text-slate-500 text-xs">
                                  💡 Подсказка: На дорогах с односторонним движением обгона быть не может, только опережение.
                              </p>
                          </div>
                      </div>
                  </motion.div>
              </div>
           </ScrollArea>

           <div className="p-4 bg-white border-t">
              <div className="max-w-3xl mx-auto relative flex gap-2">
                  <div className="relative flex-1">
                     <Input placeholder="Спросите что-нибудь про ПДД..." className="pr-12 py-6 bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                     <Button size="icon" variant="ghost" className="absolute right-1 top-1 bottom-1 h-auto w-10 text-slate-400 hover:text-primary">
                        <Sparkles className="h-5 w-5" />
                     </Button>
                  </div>
                  <Button className="h-auto px-6 rounded-xl shadow-md bg-primary hover:bg-primary/90">
                      <Send className="h-5 w-5" />
                  </Button>
              </div>
           </div>
        </TabsContent>

        {/* SCENARIO BUILDER MODE */}
        <TabsContent value="scenario" className="flex-1 flex flex-col md:flex-row gap-6 data-[state=active]:flex overflow-hidden min-h-0">
           
           {/* Left Sidebar - Tools */}
           <Card className="w-full md:w-72 flex-shrink-0 flex flex-col bg-white shadow-sm border-slate-200">
               <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                     <Plus className="h-5 w-5 text-blue-500" /> Библиотека
                  </CardTitle>
               </CardHeader>
               <ScrollArea className="flex-1">
                   <CardContent className="p-4 space-y-6">
                      <div>
                          <h3 className="font-semibold mb-3 text-xs uppercase text-muted-foreground tracking-wider">Дорожная сеть</h3>
                          <div className="grid grid-cols-2 gap-3">
                              <Button variant="outline" className="h-20 flex flex-col gap-2 border-dashed hover:border-solid hover:border-blue-400 hover:bg-blue-50 transition-all">
                                  <div className="w-8 h-8 border-2 border-current rounded opacity-50" />
                                  <span className="text-xs">Перекресток</span>
                              </Button>
                              <Button variant="outline" className="h-20 flex flex-col gap-2 border-dashed hover:border-solid hover:border-blue-400 hover:bg-blue-50 transition-all">
                                  <div className="w-8 h-8 border-2 border-current rounded-full opacity-50" />
                                  <span className="text-xs">Круг</span>
                              </Button>
                          </div>
                      </div>

                      <div>
                          <h3 className="font-semibold mb-3 text-xs uppercase text-muted-foreground tracking-wider">Объекты</h3>
                          <div className="space-y-2">
                              {["Машина", "Грузовик", "Пешеход", "Светофор", "Знак STOP", "Знак Главная"].map((item, i) => (
                                  <div key={i} className="flex items-center gap-3 p-3 border rounded-lg bg-slate-50 hover:bg-white hover:shadow-md hover:border-blue-200 cursor-grab active:cursor-grabbing transition-all group">
                                      <GripVertical className="h-4 w-4 text-slate-300 group-hover:text-blue-400" />
                                      <span className="font-medium text-sm">{item}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                   </CardContent>
               </ScrollArea>
           </Card>

           {/* Canvas Area */}
           <div className="flex-1 flex flex-col gap-4">
               <Card className="flex-1 bg-slate-100 relative border-2 border-dashed border-slate-300 overflow-hidden shadow-inner rounded-xl group">
                   <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03]">
                       {Array.from({ length: 1600 }).map((_, i) => (
                           <div key={i} className="border-r border-b border-black" />
                       ))}
                   </div>
                   
                   <div className="absolute inset-0 flex items-center justify-center text-slate-400 pointer-events-none select-none group-hover:opacity-50 transition-opacity">
                       <div className="text-center">
                           <CornerDownLeft className="h-12 w-12 mx-auto mb-2 opacity-20" />
                           <p>Перетащите элементы на поле</p>
                       </div>
                   </div>

                   {/* Mock Canvas Elements */}
                   <motion.div drag dragMomentum={false} className="absolute top-1/4 left-1/4 w-48 h-48 border-[20px] border-slate-400 rounded bg-slate-300 flex items-center justify-center cursor-move shadow-xl">
                      <div className="text-xs text-slate-600 font-bold uppercase">Перекресток</div>
                   </motion.div>
                   <motion.div drag dragMomentum={false} className="absolute top-1/3 left-1/3 bg-blue-600 text-white px-4 py-2 rounded shadow-2xl text-xs font-bold cursor-move z-10 flex items-center gap-2">
                      🚗 Моя машина
                   </motion.div>
                   <motion.div drag dragMomentum={false} className="absolute top-1/3 right-1/3 bg-red-500 text-white h-8 w-8 flex items-center justify-center rounded-full shadow-2xl text-[10px] font-bold cursor-move z-10">
                      STOP
                   </motion.div>
               </Card>

               {/* AI Query Panel */}
               <Card className="flex-shrink-0 bg-white shadow-lg border-t-0 rounded-t-none md:rounded-xl md:border">
                   <CardContent className="p-4 flex gap-4 items-end">
                       <div className="flex-1 space-y-2">
                           <div className="text-xs font-medium text-muted-foreground ml-1">Контекст ситуации</div>
                           <div className="flex gap-2 flex-wrap">
                               <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 border">Нерегулируемый перекресток</span>
                               <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 border">Знак STOP</span>
                               <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 border">Помеха справа</span>
                           </div>
                           <Input placeholder="Опишите вопрос, например: Кто проедет первым?" className="bg-slate-50 border-slate-200" />
                       </div>
                       <Button className="h-auto py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all">
                           <Sparkles className="h-4 w-4 mr-2" />
                           Разобрать
                       </Button>
                   </CardContent>
               </Card>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
