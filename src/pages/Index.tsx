import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const teachers = [
    {
      name: 'Анна Сергеевна Волкова',
      specialization: 'Вокал, сольфеджио',
      experience: '15 лет преподавания',
      description: 'Заслуженный педагог, выпускница консерватории. Подготовила более 50 лауреатов конкурсов.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
    },
    {
      name: 'Дмитрий Иванович Соколов',
      specialization: 'Гитара, укулеле',
      experience: '12 лет преподавания',
      description: 'Концертирующий музыкант, автор собственных методик обучения игре на струнных.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    {
      name: 'Елена Павловна Романова',
      specialization: 'Фортепиано, композиция',
      experience: '20 лет преподавания',
      description: 'Преподаватель высшей категории. Автор учебных пособий по музыкальной грамоте.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
    }
  ];

  const courses = [
    {
      title: 'Вокал',
      duration: 'от 3 месяцев',
      level: 'Для начинающих и продолжающих',
      description: 'Постановка голоса, работа с дыханием, сценическая речь. Индивидуальный подход к каждому ученику.',
      icon: 'Mic2'
    },
    {
      title: 'Гитара',
      duration: 'от 4 месяцев',
      level: 'Все уровни',
      description: 'Классическая и эстрадная гитара. Аккорды, переборы, игра по нотам. Подготовка к выступлениям.',
      icon: 'Music'
    },
    {
      title: 'Фортепиано',
      duration: 'от 6 месяцев',
      level: 'Дети и взрослие',
      description: 'Классическая школа игры на фортепиано. Теория музыки, чтение нот, импровизация.',
      icon: 'Piano'
    },
    {
      title: 'Сольфеджио',
      duration: '1 год',
      level: 'Базовый и продвинутый',
      description: 'Развитие музыкального слуха, ритма, гармонии. Подготовка к поступлению в музыкальные учебные заведения.',
      icon: 'BookOpen'
    }
  ];

  const reviews = [
    {
      name: 'Мария Петрова',
      text: 'Занимаюсь вокалом у Анны Сергеевны уже год. Результаты превзошли все ожидания! Голос окреп, появилась уверенность на сцене.',
      rating: 5
    },
    {
      name: 'Игорь Смирнов',
      text: 'Дмитрий Иванович - потрясающий педагог по гитаре. За полгода научился играть любимые композиции. Атмосфера на занятиях творческая и душевная.',
      rating: 5
    },
    {
      name: 'Екатерина Новикова',
      text: 'Привела дочь на фортепиано к Елене Павловне. Ребенок в восторге! Преподаватель умеет найти подход к детям, занятия проходят интересно.',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img 
            src="https://cdn.poehali.dev/files/a26605e1-0355-42a2-9883-37dbf831f5bf.png" 
            alt="Музыкальная династия" 
            className="h-12 logo-creative"
          />
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">О нас</button>
            <button onClick={() => scrollToSection('teachers')} className="hover:text-accent transition-colors">Преподаватели</button>
            <button onClick={() => scrollToSection('courses')} className="hover:text-accent transition-colors">Курсы</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-accent transition-colors">Галерея</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-accent transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-accent transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contacts')} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Записаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <img 
            src="https://cdn.poehali.dev/files/6a4a5a4d-a098-4319-9bc9-d5f68fb7f63b.png" 
            alt="Музыкальная династия" 
            className="mx-auto mb-8 w-64 md:w-96 logo-hero"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
            Музыкальная династия
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Откройте мир музыки вместе с профессионалами. Обучение вокалу, гитаре, фортепиано для всех возрастов.
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contacts')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            Записаться на пробное занятие
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">О нашей студии</h2>
          <p className="text-lg leading-relaxed mb-6 text-card-foreground">
            <strong>Музыкальная династия</strong> — это творческое пространство, где рождаются таланты и крепнет любовь к музыке. 
            Мы продолжаем традиции семейного преподавания, передавая знания и опыт из поколения в поколение.
          </p>
          <p className="text-lg leading-relaxed text-card-foreground">
            Наши преподаватели — профессиональные музыканты с консерваторским образованием и богатым концертным опытом. 
            Мы учим не просто играть на инструментах, а чувствовать музыку, понимать её язык и выражать себя через творчество.
          </p>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">Наши преподаватели</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card border-border">
                <CardContent className="p-6">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold mb-2 text-center text-card-foreground">{teacher.name}</h3>
                  <p className="text-accent font-semibold text-center mb-2">{teacher.specialization}</p>
                  <p className="text-sm text-muted-foreground text-center mb-4">{teacher.experience}</p>
                  <p className="text-card-foreground">{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">Наши курсы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-background border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <Icon name={course.icon as any} size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">{course.title}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      <Icon name="Clock" size={16} className="inline mr-2" />
                      {course.duration}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <Icon name="Users" size={16} className="inline mr-2" />
                      {course.level}
                    </p>
                  </div>
                  <p className="text-foreground leading-relaxed">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">Галерея</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800" 
                  alt="Занятия в студии"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <img 
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800" 
                  alt="Концерт учеников"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800" 
                  alt="Студия изнутри"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">Отзывы учеников</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-card-foreground">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">Контакты и запись</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Адрес студии:</p>
                    <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15, стр. 2</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Телефон:</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email:</p>
                    <p className="text-muted-foreground">info@music-dynasty.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Режим работы:</p>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 21:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">Записаться на занятие</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-card-foreground">Ваше имя</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Иванов"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-card-foreground">Телефон</label>
                    <Input 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-card-foreground">Направление</label>
                    <Input 
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                      placeholder="Вокал, гитара, фортепиано..."
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-card-foreground">Комментарий</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о вашем опыте и целях..."
                      rows={4}
                      className="bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <img 
            src="https://cdn.poehali.dev/files/3c4b93a5-0228-41e3-ae32-6dfef16c223b.png" 
            alt="Музыкальная династия" 
            className="h-12 mx-auto mb-4 logo-footer"
          />
          <p className="text-sm opacity-90">
            © 2024 Музыкальная династия. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;