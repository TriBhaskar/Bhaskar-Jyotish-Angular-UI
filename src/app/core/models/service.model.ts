export interface Service {
  icon: string;
  iconColor: 'orange' | 'magenta';
  title: string;
  description: string;
  features: string[];
  price: string;
  buttonText: string;
  buttonColor?: 'primary' | 'accent';
}
