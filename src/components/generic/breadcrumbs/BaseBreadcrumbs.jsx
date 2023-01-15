import { Link } from 'react-router-dom';
import clsx from 'clsx';

function BaseBreadcrumbs({ pages, separator: SeparatorIcon }) {
  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol className='flex items-center'>
        {pages.map(
          (p, i) =>
            p.name && (
              <li key={p.name}>
                <div className='flex items-center'>
                  {i !== 0 && (
                    <SeparatorIcon
                      className='mx-4 h-5 w-5 shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                  )}
                  <Link
                    to={p.redirect}
                    className={clsx('text-base font-medium ', {
                      'text-blue-400 hover:text-blue-600 hover:underline':
                        !p.current,
                      'text-blue-900 hover:underline': p.current,
                    })}
                    aria-current={p.current ? 'page' : undefined}
                  >
                    {p.name}
                  </Link>
                </div>
              </li>
            )
        )}
      </ol>
    </nav>
  );
}

export default BaseBreadcrumbs;
