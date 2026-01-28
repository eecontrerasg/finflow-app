'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Tooltip } from '@/components/ui/Tooltip'

type NavItemProps = {
  label: string
  icon: string
  href: string
  premium?: boolean
  collapsed: boolean
  active: boolean
}

const NavItem = ({
  label,
  icon,
  href,
  premium,
  collapsed,
  active
}: NavItemProps) => {
  return (
    <Tooltip label={label} show={collapsed}>
      <Link
        href={href}
        className={`
          flex items-center gap-3 px-3 py-2 rounded-lg
          transition-colors
          ${
            active
              ? 'bg-highlight-blue text-primary'
              : 'text-gray-600 hover:bg-highlight-blue'
          }
        `}
      >
        <span className="material-icon text-xl">{icon}</span>

        {!collapsed && (
          <>
            <span className="flex-1">{label}</span>
            {premium && (
              <span className="text-[10px] bg-premium text-white px-2 py-0.5 rounded">
                PRO
              </span>
            )}
          </>
        )}
      </Link>
    </Tooltip>
  )
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={`
        h-[97vh] flex flex-col
        bg-surface
        bg-gray-900
        transition-all duration-300
        rounded-xl
        border-gray-600
        m-5
        ${collapsed ? 'w-20' : 'w-72'}
      `}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-center mt-10">
        {!collapsed ? (
          <Image
            src="/finflow-logo.svg"
            alt="FinFlow"
            width={200}
            height={60}
            priority
          />
        ) : (
          <Image
            src="/finflow-icon.svg"
            alt="FinFlow"
            width={36}
            height={36}
            priority
          />
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 space-y-1 mt-15">
        <NavItem
          label="Dashboard"
          icon="dashboard"
          href="/dashboard"
          collapsed={collapsed}
          active={pathname === '/dashboard'}
        />

        <NavItem
          label="Clientes"
          icon="group"
          href="/clientes"
          collapsed={collapsed}
          active={pathname.startsWith('/clientes')}
        />

        <NavItem
          label="Pagos"
          icon="payments"
          href="/pagos"
          collapsed={collapsed}
          active={pathname.startsWith('/pagos')}
        />

        <NavItem
          label="Reportes"
          icon="bar_chart"
          href="/reportes"
          premium
          collapsed={collapsed}
          active={pathname.startsWith('/reportes')}
        />

        <NavItem
          label="Configuración"
          icon="settings"
          href="/configuracion"
          collapsed={collapsed}
          active={pathname.startsWith('/configuracion')}
        />
      </nav>

      {/* Collapse / Expand button */}
      <div className="h-14 flex items-center justify-center">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <span className="material-icon">
            {collapsed ? 'chevron_right' : 'chevron_left'}
          </span>
        </button>
      </div>
    </aside>
  )
}
