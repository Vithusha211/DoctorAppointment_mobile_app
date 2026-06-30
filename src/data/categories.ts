import { ComponentProps } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type CategoryIcon = ComponentProps<typeof MaterialCommunityIcons>['name'];

export type Category = {
  id: string;
  label: string;
  icon: CategoryIcon;
  color: string;
};

export const CATEGORIES: Category[] = [
  { id: 'dentistry', label: 'Dentistry', icon: 'tooth', color: '#F4A4B8' },
  { id: 'cardiology', label: 'Cardiolo..', icon: 'heart-pulse', color: '#A8D5BA' },
  { id: 'pulmonology', label: 'Pulmono..', icon: 'lungs', color: '#F5B87A' },
  { id: 'general', label: 'General', icon: 'stethoscope', color: '#C4B5E8' },
  { id: 'neurology', label: 'Neurology', icon: 'brain', color: '#7EC8C8' },
  { id: 'gastroenterology', label: 'Gastroen..', icon: 'stomach', color: '#8B7EC8' },
  { id: 'laboratory', label: 'Laborato..', icon: 'flask-outline', color: '#F0C4C4' },
  { id: 'vaccination', label: 'Vaccinat..', icon: 'needle', color: '#A8C8F0' },
];
