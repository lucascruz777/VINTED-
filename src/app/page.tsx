"use client";

import { useState } from "react";
import { 
  Package, 
  Calendar, 
  RefreshCw, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Plus,
  Clock,
  TrendingUp,
  Users,
  DollarSign,
  Shield,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function AutoVintedDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [products, setProducts] = useState([
    { id: 1, name: "Casaco de Inverno", price: 89.90, active: true, captions: 3, publishedDays: 2 },
    { id: 2, name: "Tênis Nike Air", price: 120.00, active: true, captions: 4, publishedDays: 5 },
    { id: 3, name: "Bolsa Couro", price: 67.80, active: true, captions: 2, publishedDays: 1 },
    { id: 4, name: "Vestido Floral", price: 95.30, active: false, captions: 3, publishedDays: 7 },
    { id: 5, name: "Jaqueta Jeans", price: 78.90, active: true, captions: 5, publishedDays: 3 },
    { id: 6, name: "Calça Social", price: 45.90, active: true, captions: 2, publishedDays: 4 },
  ]);

  const [schedules, setSchedules] = useState([
    { id: 1, product: "Casaco de Inverno", time: "Hoje, 18:00", status: "pending" },
    { id: 2, product: "Tênis Nike Air", time: "Hoje, 20:00", status: "pending" },
    { id: 3, product: "Bolsa Couro", time: "Amanhã, 12:00", status: "pending" },
    { id: 4, product: "Vestido Floral", time: "Amanhã, 18:00", status: "pending" },
  ]);

  const weeklyData = [
    { day: "Segunda", posts: 22, width: 89 },
    { day: "Terça", posts: 15, width: 65 },
    { day: "Quarta", posts: 29, width: 98 },
    { day: "Quinta", posts: 18, width: 72 },
    { day: "Sexta", posts: 25, width: 88 },
    { day: "Sábado", posts: 12, width: 55 },
    { day: "Domingo", posts: 14, width: 60 }
  ];

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Produto ${products.length + 1}`,
      price: Math.random() * 100 + 50,
      active: true,
      captions: Math.floor(Math.random() * 5) + 1,
      publishedDays: Math.floor(Math.random() * 7) + 1
    };
    setProducts([...products, newProduct]);
  };

  const handleToggleProduct = (id: number) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, active: !p.active } : p
    ));
  };

  const handleAddSchedule = () => {
    const newSchedule = {
      id: schedules.length + 1,
      product: products[Math.floor(Math.random() * products.length)].name,
      time: "Hoje, 22:00",
      status: "pending"
    };
    setSchedules([...schedules, newSchedule]);
  };

  const handleRemoveSchedule = (id: number) => {
    setSchedules(schedules.filter(s => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Luxuoso */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  AutoVinted
                </h1>
                <p className="text-xs text-gray-500 font-medium">Automação Premium & Segura</p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200 font-semibold">
                <Sparkles className="w-3 h-3 mr-1" />
                Plano Pro
              </Badge>
              <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 text-gray-700 font-medium">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Stats Cards Responsivos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="border-gray-200 shadow-md hover:shadow-xl transition-shadow bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-gray-600">Produtos Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900">47</p>
                  <p className="text-xs text-blue-600 mt-1 font-medium">+12 esta semana</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-md hover:shadow-xl transition-shadow bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-gray-600">Agendamentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900">23</p>
                  <p className="text-xs text-indigo-600 mt-1 font-medium">Próximas 24h</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-md hover:shadow-xl transition-shadow bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-gray-600">Taxa de Resposta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900">98%</p>
                  <p className="text-xs text-emerald-600 mt-1 font-medium">Automático</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-md hover:shadow-xl transition-shadow bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-gray-600">Engajamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900">+34%</p>
                  <p className="text-xs text-blue-600 mt-1 font-medium">vs. mês anterior</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Interativas */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-100 shadow-sm border border-gray-200 p-1 w-full overflow-x-auto flex-nowrap">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm whitespace-nowrap text-xs sm:text-sm"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger 
              value="products" 
              className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm whitespace-nowrap text-xs sm:text-sm"
            >
              <Package className="w-4 h-4 mr-2" />
              Produtos
            </TabsTrigger>
            <TabsTrigger 
              value="schedule" 
              className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm whitespace-nowrap text-xs sm:text-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendamentos
            </TabsTrigger>
            <TabsTrigger 
              value="automation" 
              className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm whitespace-nowrap text-xs sm:text-sm"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Automações
            </TabsTrigger>
            <TabsTrigger 
              value="messages" 
              className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm whitespace-nowrap text-xs sm:text-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Mensagens
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-lg border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Desempenho Semanal
                  </CardTitle>
                  <CardDescription className="text-gray-600">Publicações dos últimos 7 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyData.map((item) => (
                      <div key={item.day} className="flex items-center gap-3">
                        <span className="text-sm font-medium w-20 text-gray-700">{item.day}</span>
                        <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-end px-3 transition-all duration-500"
                            style={{ width: `${item.width}%` }}
                          >
                            <span className="text-xs font-semibold text-white">
                              {item.posts} posts
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    Melhores Horários
                  </CardTitle>
                  <CardDescription className="text-gray-600">Horários com maior engajamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { time: "18:00 - 20:00", engagement: "Alto", color: "emerald" },
                      { time: "12:00 - 14:00", engagement: "Médio-Alto", color: "blue" },
                      { time: "20:00 - 22:00", engagement: "Alto", color: "emerald" },
                      { time: "08:00 - 10:00", engagement: "Médio", color: "indigo" },
                      { time: "14:00 - 16:00", engagement: "Médio", color: "indigo" },
                    ].map((slot, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="font-medium text-gray-800">{slot.time}</span>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`
                            ${slot.color === 'emerald' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
                            ${slot.color === 'blue' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                            ${slot.color === 'indigo' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : ''}
                            font-semibold
                          `}
                        >
                          {slot.engagement}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  Respostas Automáticas Recentes
                </CardTitle>
                <CardDescription className="text-gray-600">Últimas interações automatizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { user: "Maria S.", message: "Qual o prazo de envio?", response: "Enviamos em até 2 dias úteis!", time: "há 5 min" },
                    { user: "João P.", message: "Aceita R$ 45?", response: "Oferta aceita! Vamos finalizar?", time: "há 12 min" },
                    { user: "Ana L.", message: "Ainda disponível?", response: "Sim! Produto disponível.", time: "há 23 min" },
                    { user: "Carlos M.", message: "Qual o tamanho?", response: "Tamanho M, conforme descrição.", time: "há 1h" },
                  ].map((msg, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {msg.user.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                          <span className="font-semibold text-gray-800">{msg.user}</span>
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1 break-words">"{msg.message}"</p>
                        <p className="text-sm text-emerald-600 font-medium break-words">↳ {msg.response}</p>
                      </div>
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold flex-shrink-0">
                        Auto
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab - INTERATIVO */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Meus Produtos</h2>
                <p className="text-gray-600">Gerencie seus produtos e variações de legendas</p>
              </div>
              <Button 
                onClick={handleAddProduct}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg shadow-blue-500/30 text-white font-semibold w-full sm:w-auto"
              >
                <Plus className="w-4 h-4 mr-2" />
                Novo Produto
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {products.map((product) => (
                <Card key={product.id} className="shadow-lg border-gray-200 bg-white hover:shadow-xl transition-all">
                  <CardHeader className="p-0">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 rounded-t-lg flex items-center justify-center">
                      <Package className="w-16 h-16 text-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      <Badge 
                        variant="outline" 
                        className={`${product.active ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-gray-100 text-gray-600 border-gray-300'} font-semibold`}
                      >
                        {product.active ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Descrição do produto com detalhes...</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-blue-600">R$ {product.price.toFixed(2)}</span>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-gray-300 hover:bg-gray-50 text-gray-700 font-medium"
                          onClick={() => alert(`Editando ${product.name}`)}
                        >
                          Editar
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-gray-300 hover:bg-gray-50 text-gray-700"
                          onClick={() => handleToggleProduct(product.id)}
                        >
                          <RefreshCw className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{product.captions} legendas</span>
                        <span>Publicado há {product.publishedDays} dias</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Tab - INTERATIVO */}
          <TabsContent value="schedule" className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Agendamentos</h2>
                <p className="text-gray-600">Publique nos melhores horários automaticamente</p>
              </div>
              <Button 
                onClick={handleAddSchedule}
                className="bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 shadow-lg shadow-indigo-500/30 text-white font-semibold w-full sm:w-auto"
              >
                <Plus className="w-4 h-4 mr-2" />
                Novo Agendamento
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-lg border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Próximos Agendamentos</CardTitle>
                  <CardDescription className="text-gray-600">Publicações programadas para as próximas 24h</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedules.map((schedule) => (
                      <div key={schedule.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <Calendar className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="font-medium text-gray-800 truncate">{schedule.product}</p>
                            <p className="text-sm text-gray-600">{schedule.time}</p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 flex-shrink-0"
                          onClick={() => handleRemoveSchedule(schedule.id)}
                        >
                          Cancelar
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Histórico de Publicações</CardTitle>
                  <CardDescription className="text-gray-600">Últimas publicações automáticas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { product: "Jaqueta Jeans", time: "Ontem, 18:30", views: 45 },
                      { product: "Calça Social", time: "Ontem, 12:15", views: 32 },
                      { product: "Camisa Polo", time: "2 dias atrás, 20:00", views: 67 },
                      { product: "Shorts Esportivo", time: "2 dias atrás, 14:30", views: 28 },
                    ].map((history, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center flex-shrink-0">
                            <Package className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-gray-800 truncate">{history.product}</p>
                            <p className="text-sm text-gray-600">{history.time}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-lg font-bold text-emerald-600">{history.views}</p>
                          <p className="text-xs text-gray-500">visualizações</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Automation Tab */}
          <TabsContent value="automation" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Automações Ativas</h2>
              <p className="text-gray-600">Configure renovações e republicações automáticas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg border-gray-200 bg-gradient-to-br from-white to-blue-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <RefreshCw className="w-5 h-5 text-blue-600" />
                      Renovação Automática
                    </CardTitle>
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold">
                      Ativo
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">Renova anúncios automaticamente para manter visibilidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Frequência</span>
                      <span className="text-sm text-blue-600 font-semibold">A cada 3 dias</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Produtos incluídos</span>
                      <span className="text-sm text-blue-600 font-semibold">47 produtos</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Última renovação</span>
                      <span className="text-sm text-gray-600">Há 1 dia</span>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      Configurar Renovação
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-gray-200 bg-gradient-to-br from-white to-indigo-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <Shield className="w-5 h-5 text-indigo-600" />
                      Variação de Legendas
                    </CardTitle>
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold">
                      Ativo
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">Alterna legendas automaticamente em cada publicação</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Legendas cadastradas</span>
                      <span className="text-sm text-indigo-600 font-semibold">12 variações</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Modo de alternância</span>
                      <span className="text-sm text-indigo-600 font-semibold">Sequencial</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Última alteração</span>
                      <span className="text-sm text-gray-600">Há 3 horas</span>
                    </div>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
                      Gerenciar Legendas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Performance das Automações
                </CardTitle>
                <CardDescription className="text-gray-600">Resultados dos últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-lg border border-emerald-200">
                    <p className="text-sm text-emerald-700 font-semibold mb-1">Renovações Realizadas</p>
                    <p className="text-3xl font-bold text-emerald-700">142</p>
                    <p className="text-xs text-emerald-600 mt-1">+23% vs. mês anterior</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 font-semibold mb-1">Legendas Alternadas</p>
                    <p className="text-3xl font-bold text-blue-700">89</p>
                    <p className="text-xs text-blue-600 mt-1">Média de 3 por produto</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-lg border border-indigo-200">
                    <p className="text-sm text-indigo-700 font-semibold mb-1">Tempo Economizado</p>
                    <p className="text-3xl font-bold text-indigo-700">18h</p>
                    <p className="text-xs text-indigo-600 mt-1">Neste mês</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Respostas Automáticas</h2>
              <p className="text-gray-600">Configure templates para responder automaticamente</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-lg border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                    Templates Ativos
                  </CardTitle>
                  <CardDescription className="text-gray-600">Respostas configuradas para dúvidas comuns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { trigger: "prazo de envio", response: "Enviamos em até 2 dias úteis após confirmação do pagamento!", count: 23 },
                      { trigger: "ainda disponível", response: "Sim! Produto disponível. Pode finalizar a compra!", count: 18 },
                      { trigger: "qual o tamanho", response: "O tamanho está especificado na descrição do produto.", count: 15 },
                      { trigger: "aceita oferta", response: "Posso aceitar ofertas razoáveis. Qual valor você propõe?", count: 12 },
                    ].map((template, index) => (
                      <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold">
                            {template.count} usos
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          Gatilho: <span className="text-blue-600">"{template.trigger}"</span>
                        </p>
                        <p className="text-sm text-gray-600 bg-white p-2 rounded border border-gray-200">
                          {template.response}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    Regras de Negociação
                  </CardTitle>
                  <CardDescription className="text-gray-600">Configure como lidar com ofertas automaticamente</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-800">Ofertas Aceitáveis</h4>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold">
                          Ativo
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Desconto mínimo aceito:</span>
                          <span className="font-semibold text-blue-600">10%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Desconto máximo aceito:</span>
                          <span className="font-semibold text-blue-600">25%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Resposta automática:</span>
                          <span className="font-semibold text-emerald-600">Sim</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-800">Ofertas Baixas</h4>
                        <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold">
                          Ativo
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Desconto acima de:</span>
                          <span className="font-semibold text-indigo-600">25%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Ação:</span>
                          <span className="font-semibold text-indigo-600">Recusar educadamente</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Resposta automática:</span>
                          <span className="font-semibold text-emerald-600">Sim</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      Configurar Regras
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Estatísticas de Mensagens
                </CardTitle>
                <CardDescription className="text-gray-600">Performance das respostas automáticas nos últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-lg border border-emerald-200 text-center">
                    <MessageSquare className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-emerald-700">234</p>
                    <p className="text-xs text-emerald-600 mt-1">Mensagens respondidas</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg border border-blue-200 text-center">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-700">2min</p>
                    <p className="text-xs text-blue-600 mt-1">Tempo médio de resposta</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-lg border border-indigo-200 text-center">
                    <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-indigo-700">98%</p>
                    <p className="text-xs text-indigo-600 mt-1">Taxa de satisfação</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg border border-blue-200 text-center">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-700">156</p>
                    <p className="text-xs text-blue-600 mt-1">Compradores atendidos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer Luxuoso */}
      <footer className="border-t border-gray-200 bg-white/95 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 font-medium">
              © 2024 AutoVinted - Automação Premium & Segura
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 font-medium">
                Suporte
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 font-medium">
                Documentação
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 font-medium">
                <Sparkles className="w-4 h-4 mr-1" />
                Upgrade de Plano
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
