
import React from 'react';
import { AlertCircle } from 'lucide-react';

// Helper to generate ARIA IDs
const getAriaIds = (id?: string, hasError?: boolean, hasHelper?: boolean) => {
  if (!id) return {};
  const errorId = hasError ? `${id}-error` : undefined;
  const helperId = hasHelper ? `${id}-helper` : undefined;
  // Combine IDs for aria-describedby
  const describedBy = [errorId, helperId].filter(Boolean).join(' ');
  return { errorId, helperId, describedBy };
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, helperText, icon, className = "", ...props }) => {
  const id = props.id || props.name;
  const { errorId, helperId, describedBy } = getAriaIds(id, !!error, !!helperText);

  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            {icon}
          </div>
        )}
        <input 
          className={`w-full h-11 ${icon ? 'pl-10' : 'px-4'} py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20 pr-10' : 'border-slate-300 dark:border-slate-700'} ${className}`}
          aria-invalid={!!error}
          aria-describedby={describedBy || undefined}
          {...props}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-500 animate-pulse">
            <AlertCircle className="w-5 h-5" />
          </div>
        )}
      </div>
      {helperText && !error && <p id={helperId} className="mt-1 text-xs text-slate-500 dark:text-slate-400">{helperText}</p>}
      {error && (
        <div role="alert" id={errorId} className="mt-1 text-xs text-red-500 font-medium animate-fade-in-up flex items-center gap-1">
           {error}
        </div>
      )}
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, error, helperText, options, className = "", ...props }) => {
  const id = props.id || props.name;
  const { errorId, helperId, describedBy } = getAriaIds(id, !!error, !!helperText);

  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>}
      <div className="relative">
        <select 
          className={`w-full h-11 px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed appearance-none ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-300 dark:border-slate-700'} ${className}`}
          aria-invalid={!!error}
          aria-describedby={describedBy || undefined}
          {...props}
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>
      {helperText && !error && <p id={helperId} className="mt-1 text-xs text-slate-500 dark:text-slate-400">{helperText}</p>}
      {error && (
        <div role="alert" id={errorId} className="mt-1 text-xs text-red-500 font-medium animate-fade-in-up flex items-center gap-1">
           <AlertCircle className="w-4 h-4" /> {error}
        </div>
      )}
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, helperText, className = "", ...props }) => {
  const id = props.id || props.name;
  const { errorId, helperId, describedBy } = getAriaIds(id, !!error, !!helperText);

  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>}
      <textarea 
        className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed resize-y min-h-[120px] ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-300 dark:border-slate-700'} ${className}`}
        aria-invalid={!!error}
        aria-describedby={describedBy || undefined}
        {...props}
      />
      {helperText && !error && <p id={helperId} className="mt-1 text-xs text-slate-500 dark:text-slate-400">{helperText}</p>}
      {error && (
        <div role="alert" id={errorId} className="mt-1 text-xs text-red-500 font-medium animate-fade-in-up flex items-center gap-1">
           <AlertCircle className="w-4 h-4" /> {error}
        </div>
      )}
    </div>
  );
};

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode; // Updated to ReactNode to allow links
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, className = "", ...props }) => (
  <label className="flex items-start gap-3 cursor-pointer group">
    <div className="relative flex items-center mt-0.5">
      <input 
        type="checkbox" 
        className={`peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 dark:border-slate-600 shadow-sm checked:border-primary-600 checked:bg-primary-600 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all ${className}`}
        {...props}
      />
      <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors select-none">{label}</span>
  </label>
);
