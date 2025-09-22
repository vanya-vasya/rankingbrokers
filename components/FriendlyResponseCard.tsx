import React from "react";
import { cn } from "@/lib/utils";
import { Heart, Lightbulb, Target, Sparkles } from "lucide-react";
import { FriendlyResponse } from "@/lib/friendly-response-formatter";

interface FriendlyResponseCardProps {
  response: FriendlyResponse;
  gradient?: string;
  className?: string;
  toolTitle?: string;
}

export function FriendlyResponseCard({ 
  response, 
  gradient = "from-emerald-400 via-green-500 to-teal-600",
  className,
  toolTitle = "Master Nutritionist"
}: FriendlyResponseCardProps) {
  return (
    <div className={cn(
      "mx-auto max-w-4xl rounded-2xl shadow-xl border-0 bg-white overflow-hidden",
      "transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]",
      className
    )}>
      {/* Header with emoji and greeting */}
      <div className={cn(
        "bg-gradient-to-r p-6 text-white relative overflow-hidden",
        `bg-gradient-to-r ${gradient}`
      )}>
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 text-6xl">{response.emoji}</div>
          <div className="absolute bottom-2 left-4 h-8 w-8 rounded-full bg-white opacity-20"></div>
          <div className="absolute top-8 left-20 h-4 w-4 rounded-full bg-white opacity-20"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-6 w-6" />
            <h2 className="text-2xl font-bold tracking-tight">{toolTitle}</h2>
          </div>
          
          <p className="text-lg text-white/90 leading-relaxed">{response.greeting}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="p-8 space-y-6">
        {/* Main message */}
        {response.mainContent && (
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
              <div className="text-gray-700 leading-relaxed">
                <div 
                  dangerouslySetInnerHTML={{ __html: response.mainContent }}
                  className="prose prose-emerald max-w-none
                    prose-headings:text-emerald-800 
                    prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-6
                    prose-h3:text-xl prose-h3:font-bold prose-h3:mb-3 prose-h3:mt-6
                    prose-h4:text-lg prose-h4:font-semibold prose-h4:mb-2 prose-h4:text-emerald-700
                    prose-ul:space-y-2 prose-ul:mb-4
                    prose-li:mb-2 prose-li:text-gray-700
                    prose-p:mb-4 prose-p:text-gray-700
                    prose-strong:text-emerald-700 prose-strong:font-semibold
                    prose-em:text-emerald-700 prose-em:font-medium prose-em:not-italic"
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Action items */}
        {response.actionItems.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Target className="h-5 w-5 text-emerald-600" />
              🎯 Your Nutrition Blueprint
            </h3>
            
            <div className="space-y-3">
              {response.actionItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div className="text-gray-700 leading-relaxed flex-1">
                    <div 
                      dangerouslySetInnerHTML={{ __html: item }}
                      className="prose prose-emerald max-w-none prose-sm
                        prose-strong:text-emerald-700 prose-strong:font-semibold
                        prose-em:text-emerald-700 prose-em:font-medium prose-em:not-italic"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Next steps */}
        {response.nextSteps && (
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Next Steps
            </h3>
            <div 
              className="text-amber-700 leading-relaxed prose prose-amber max-w-none prose-sm
                prose-strong:text-amber-700 prose-strong:font-semibold
                prose-em:text-amber-700 prose-em:font-medium prose-em:not-italic" 
              dangerouslySetInnerHTML={{ 
                __html: response.nextSteps || ''
              }} 
            />
          </div>
        )}
        
        {/* Encouragement */}
        <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
          <div className="text-2xl mb-2">{response.emoji}</div>
          <p className="text-purple-800 font-medium text-lg italic leading-relaxed">
            {response.encouragement}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 pb-6">
        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span>Generated with care by {toolTitle} AI</span>
          </div>
          <div className="text-xs">
            Personalized nutrition guidance
          </div>
        </div>
      </div>
    </div>
  );
}
