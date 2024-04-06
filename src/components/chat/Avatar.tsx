function Avatar() {
  return (
    <div className="flex justify-center items-center flex-col mb-10 shadow-lg bg-slate-100 p-3 rounded-lg">
        <img className='w-16 h-16 rounded-full' 
            src="https://themesdesign.in/webadmin/layouts/assets/images/users/avatar-3.jpg" alt="" />
        <p className="font-bold font-mono mt-4">Martin Gurley</p>
    </div>
  )
}

export default Avatar