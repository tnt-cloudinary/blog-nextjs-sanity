import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface CloudinaryCoverImageProps {
  title: string
  public_id: string
  format: string
  url: string
  derived: any
}

export default function CloudnaryCoverImage(props: CloudinaryCoverImageProps) {
  const { public_id, format, title, url, derived } = props
  const default_transformation = 'f_auto,q_auto:eco,w_2000,c_fit,dpr_auto'
  const alt_text = "Cover image for " + title + " delivered by Cloudinary."
  let display_url = '';
  if (typeof derived !== 'undefined' && derived.length > 0) {
    display_url = derived[0].secure_url;
  } else {
    let secure_url_l = url.split(/v\d{10,15}/)[0];
    let secure_url_r = url.split(/v\d{10,15}/)[1];
    display_url = secure_url_l+default_transformation+secure_url_r;
  }

  return (
    <div className="sm:mx-0">
      <img src={display_url} alt={alt_text} />
    </div>
  )
}
