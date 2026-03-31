

import { fetchRawCollection } from '@/services/cmsViewApi';

export interface LegalItem {
  id: string;
  slug: string;
  title: string;
  content: string;
}

export const fetchLegalPages = async (): Promise<LegalItem[]> => {
  try {
    const data = await fetchRawCollection('legal');
    const list = Array.isArray(data) ? data : [];

    return list.map((item: any) => ({
      id: item.uuid,
      slug: item.fields?.['legal-slug'] || '',
      title: item.fields?.['legal-title'] || 'Untitled',
      content: item.fields?.['legal-content']?.trim() || '<p>No content available</p>',
    }));
  } catch (error) {
    console.error('Error fetching legal pages:', error);
    return [];
  }
};
