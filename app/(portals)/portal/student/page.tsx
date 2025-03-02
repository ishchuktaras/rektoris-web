import RoleBasedWrapper from '@/components/RoleBasedWrapper'
import React from 'react'

export default function page() {
  return (
    <RoleBasedWrapper allowedRoles={["STUDENT"]}>
      <h2>Wellcome Student</h2>
    </RoleBasedWrapper>
  )
}
