'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import IconifyIcon from '@/components/IconifyIcon';

import Faqs from '../faq';
import HeaderTitle from '../HeaderTitle';
import { useTheme } from '@/utils/useTheme';
type FaqProps = {
  id: number;
  question: string;
  answer: string;
  category: string;
};
type SearchBarProps = {
  categories: string[];
  faqs: FaqProps[];
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
};

export default function FAQSearch({ categories, faqs, title, description }: SearchBarProps) {
  const { theme } = useTheme();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;

      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        faq.question.toLowerCase().includes(searchValue) ||
        faq.answer.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const groupedFAQs = useMemo(() => {
    return filteredFAQs.reduce<Record<string, typeof filteredFAQs>>((groups, faq) => {
      if (!groups[faq.category]) {
        groups[faq.category] = [];
      }

      groups[faq.category].push(faq);

      return groups;
    }, {});
  }, [filteredFAQs]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilter(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="  px-3 py-5">
      {/* Search + Filter */}
      {title && (
        <h2 className="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2" style={{ maxWidth: '70rem' }}>
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-4">
          <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
            <span>{description}</span>
          </li>
        </ul>
      )}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-9 ">
          <div className="d-flex position-relative gap-2">
            {/* Search */}
            <div className="input-group">
              <span className="input-group-text position-absolute end-0 top-50 translate-middle-y zindex-5 right-0 border-0 bg-transparent">
                <IconifyIcon icon="bx:search" />
              </span>

              <input
                type="search"
                className="form-control rounded"
                placeholder="Search FAQs..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            {/* Filter */}
            <div className="position-relative" ref={filterRef}>
              <button
                type="button"
                className="btn btn-outline-primary h-100"
                onClick={() => setShowFilter(!showFilter)}
              >
                Filter
                <span className="ms-2">▼</span>
              </button>

              {/* Dropdown */}
              {showFilter && (
                <div
                  className="dropdown-menu show position-absolute end-0 mt-2"
                  style={{
                    minWidth: '260px',
                    maxHeight: '350px',
                    overflowY: 'auto',
                    zIndex: 1000,
                  }}
                >
                  {categories.map(category => (
                    <button
                      key={category}
                      type="button"
                      className={`dropdown-item ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowFilter(false);
                      }}
                    >
                      {selectedCategory === category && <span className="me-2">✓</span>}

                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Selected Filter */}
          <div className="mt-3">
            <small className="text-muted">
              Category: <strong>{selectedCategory}</strong>
            </small>
            {(selectedCategory !== 'All' || search !== '') && (
              <button
                type="button"
                className="btn-close ms-2 "
                onClick={() => {
                  setSelectedCategory('All');
                  setSearch('');
                }}
              ></button>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Results */}
      <div className="row justify-content-center">
        <div className="col-lg-9">
          {filteredFAQs.length > 0 ? (
            <div>
              {Object.entries(groupedFAQs).map(([category, categoryFAQs]) => (
                <div key={category} className="mb-5">
                  <HeaderTitle
                    key={theme}
                    title={`${category} FAQs`}
                    variant={theme === 'dark' ? 'gold' : 'blue'}
                    className="text-center"
                  />

                  <Faqs faqs={categoryFAQs} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <p className="text-muted">No FAQs found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
