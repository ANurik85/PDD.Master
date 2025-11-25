import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { RotateCcw, Check, Filter, ArrowLeft, HelpCircle, BrainCircuit } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FlashcardsPageProps {
  onNavigate: (page: string) => void;
}

export const FlashcardsPage = ({ onNavigate }: FlashcardsPageProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock Data
  const cards = [
    {
      id: 1,
      front: { title: "Знак 3.20", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/RU_road_sign_3.20.svg", category: "Запрещающие" },
      back: { title: "Обгон запрещен", description: "Запрещается обгон всех транспортных средств, кроме тихоходных, гужевых повозок, велосипедов, мопедов и мотоциклов без коляски." }
    },
    {
      id: 2,
      front: { title: "Знак 2.1", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/RU_road_sign_2.1.svg", category: "Приоритета" },
      back: { title: "Главная дорога", description: "Дорога, на которой предоставлено право преимущественного проезда нерегулируемых перекрестков." }
    }
  ];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 400); // Slight delay for flip animation reset
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl min-h-[calc(100vh-80px)] flex flex-col bg-slate-50/50">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
         <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => onNavigate('learn')} className="gap-2 hover:bg-slate-100">
                <ArrowLeft className="h-4 w-4" /> Назад
            </Button>
            <h1 className="text-2xl font-bold hidden md:block">Умные карточки</h1>
         </div>
         
         <div className="flex gap-2">
            <Badge variant="outline" className="px-4 py-2 bg-white text-sm cursor-pointer hover:border-primary transition-colors">Все темы</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">Новые: 12</Badge>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Filter className="h-5 w-5" />
            </Button>
         </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center pb-12 relative">
        
        {/* Card Container */}
        <div className="relative w-full max-w-md aspect-[3/4] md:aspect-[4/3] perspective-1000 cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
            <motion.div 
                className="w-full h-full relative preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <Card className="absolute inset-0 backface-hidden w-full h-full flex flex-col items-center justify-center p-8 border border-slate-200 shadow-xl rounded-3xl bg-white hover:shadow-2xl transition-shadow">
                    <div className="absolute top-6 right-6">
                        <Badge variant="outline" className="text-xs text-muted-foreground font-normal">{currentCard.front.category}</Badge>
                    </div>
                    <div className="flex-1 flex items-center justify-center w-full">
                       <div className="relative">
                           <div className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-full" />
                           <img src={currentCard.front.image} alt={currentCard.front.title} className="relative max-h-48 md:max-h-64 object-contain z-10 drop-shadow-lg" />
                       </div>
                    </div>
                    <div className="text-center mt-8">
                        <h3 className="text-3xl font-bold text-slate-800">{currentCard.front.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                             Нажмите, чтобы проверить себя
                        </p>
                    </div>
                </Card>

                {/* Back Side */}
                <Card className="absolute inset-0 backface-hidden w-full h-full flex flex-col items-center justify-center p-8 border-2 border-primary/10 shadow-xl rounded-3xl bg-gradient-to-br from-white to-blue-50/50" style={{ transform: "rotateY(180deg)" }}>
                     <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                        <div className="p-4 bg-primary/10 rounded-full text-primary mb-2">
                            <BrainCircuit className="h-8 w-8" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900">{currentCard.back.title}</h3>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-xs">
                            {currentCard.back.description}
                        </p>
                     </div>
                </Card>
            </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-12 w-full max-w-md">
            <div className="flex flex-col items-center gap-2 group">
                <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-16 w-16 rounded-full border-2 border-red-100 bg-white text-red-500 hover:bg-red-50 hover:border-red-200 hover:text-red-600 shadow-sm hover:shadow-md transition-all"
                    onClick={handleNext}
                >
                    <RotateCcw className="h-7 w-7" />
                </Button>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-red-500 transition-colors">Забыл</span>
            </div>

            <div className="flex flex-col items-center gap-2 group">
                <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-16 w-16 rounded-full border-2 border-yellow-100 bg-white text-yellow-600 hover:bg-yellow-50 hover:border-yellow-200 hover:text-yellow-700 shadow-sm hover:shadow-md transition-all"
                    onClick={handleNext}
                >
                    <HelpCircle className="h-8 w-8" />
                </Button>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-yellow-600 transition-colors">Сложно</span>
            </div>

            <div className="flex flex-col items-center gap-2 group">
                <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-16 w-16 rounded-full border-2 border-green-100 bg-white text-green-500 hover:bg-green-50 hover:border-green-200 hover:text-green-600 shadow-sm hover:shadow-md transition-all"
                    onClick={handleNext}
                >
                    <Check className="h-8 w-8" />
                </Button>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-green-500 transition-colors">Знаю</span>
            </div>
        </div>

      </div>
    </div>
  );
};
