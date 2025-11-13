"use client";

import { useState } from "react";
import { Shield, Mail, Lock, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-white space-y-6 hidden lg:block">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AutoVinted
              </h1>
              <p className="text-slate-400">Automação Segura e Inteligente</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6 text-slate-100">
              Venda mais, trabalhe menos
            </h2>
            
            <div className="space-y-4">
              {[
                "Publique produtos em segundos",
                "Agende postagens nos melhores horários",
                "Renove anúncios automaticamente",
                "Responda mensagens 24/7",
                "Acompanhe métricas em tempo real",
                "Teste grátis por 7 dias"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <p className="text-slate-400 text-sm">
              Junte-se a mais de 1.000 vendedores que já automatizaram suas vendas
            </p>
          </div>
        </div>

        {/* Right Side - Login/Register Form */}
        <Card className="shadow-2xl border-slate-800 bg-slate-900/95 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center lg:hidden mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Shield className="w-7 h-7 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center text-slate-100">
              {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
            </CardTitle>
            <CardDescription className="text-center text-slate-400">
              {isLogin 
                ? "Entre para acessar seu dashboard" 
                : "Comece seu teste grátis de 7 dias"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">Nome completo</Label>
                  <Input 
                    id="name" 
                    placeholder="João Silva" 
                    className="h-11 bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="pl-10 h-11 bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-10 h-11 bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500"
                  />
                </div>
              </div>

              {!isLogin && (
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-lg border border-cyan-500/20">
                  <p className="text-sm font-medium text-slate-200 mb-2">
                    ✨ Incluído no teste grátis:
                  </p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• 20 publicações automáticas</li>
                    <li>• Respostas automáticas ilimitadas</li>
                    <li>• Relatórios completos</li>
                    <li>• Suporte prioritário</li>
                  </ul>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full h-11 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/20"
              >
                {isLogin ? "Entrar" : "Começar teste grátis"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {isLogin && (
                <Button 
                  type="button" 
                  variant="ghost" 
                  className="w-full text-slate-400 hover:text-slate-200"
                >
                  Esqueci minha senha
                </Button>
              )}

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-slate-900 text-slate-500">
                    {isLogin ? "Não tem conta?" : "Já tem conta?"}
                  </span>
                </div>
              </div>

              <Button 
                type="button"
                variant="outline" 
                className="w-full h-11 border-slate-700 hover:bg-slate-800 text-slate-300"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Criar conta grátis" : "Fazer login"}
              </Button>
            </form>

            {!isLogin && (
              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-xs text-center text-slate-500">
                  Ao criar uma conta, você concorda com nossos{" "}
                  <a href="#" className="text-cyan-400 hover:underline">Termos de Serviço</a>
                  {" "}e{" "}
                  <a href="#" className="text-cyan-400 hover:underline">Política de Privacidade</a>
                  {" "}(LGPD/GDPR compliant)
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Pricing Preview - Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 py-4 lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-200">Teste grátis por 7 dias</p>
              <p className="text-xs text-slate-500">Sem cartão de crédito</p>
            </div>
            <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-lg shadow-emerald-500/30">
              100% Grátis
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
